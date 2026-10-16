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
    <div className="grid grid-cols-[1fr_auto_1fr] min-h-[85vh] items-center gap-3">
      <div className="justify-self-end">
      </div>

      <div className="justify-self-center">
      <PageAnimatePresence>
				<Container>
					<div className={styles.aboutWrapper}>
						{children}	
					</div>
				</Container>
			</PageAnimatePresence>
      </div>

      <div className="justify-self-start">
        <LineBar />
      </div>
    </div>
  );
}