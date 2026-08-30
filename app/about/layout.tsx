import Container from "@/components/container";
import LineBar from "@/components/linebar";
import PageAnimatePresence from "@/components/pageAnimatePresence";
import styles from './about.module.css';

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-[85vh] flex-col items-center justify-center gap-5">
			<PageAnimatePresence>
				<Container>
					<div className={styles.aboutWrapper}>
						{children}	
					</div>
				</Container>
			</PageAnimatePresence>
      <LineBar />
    </div>
  );
}