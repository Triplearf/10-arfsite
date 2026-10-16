export interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
}

export default async function getRepositories(username: string): Promise<Repo[]> {
  // GitHub API endpoint for listing public repositories
  const res = await fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`, {
    next: { revalidate: 3600 }, // Optional: Cache the data for 1 hour (3600 seconds)
    headers: {
      // GitHub requires a User-Agent header for API requests
      'User-Agent': 'Nextjs-GitHub-App', 
      // Optional: Add a Personal Access Token if you hit rate limits
      // 'Authorization': `token ${process.env.GITHUB_PAT}`
    }
  });

  if (!res.ok) {
    throw new Error('Failed to fetch repositories from GitHub');
  }

  return res.json();
}