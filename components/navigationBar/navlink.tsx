import Link from 'next/link';

interface navLinkProps {
    href: string,
    name: string,
    color: string,
    isActive: boolean
}

const navlink = ({href, name, color, isActive}: navLinkProps) => {
  return (
    <Link
        href={href}
        style={{
            color: isActive ? `var(--color-${color})` : '#a1a1aa',
            textDecoration: isActive ? 'underline' : 'none',
            textUnderlineOffset: '6px',      
        }}
        className="transition duration-200"
        >
        {name}
    </Link>
  )
}

export default navlink
