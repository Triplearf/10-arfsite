import Link from 'next/link'

export type ColorOption = 'primary1' | 'primary2' | 'primary3' | 'primary4';

export default function InLineLink({ children, color, href }: { children: React.ReactNode, color: ColorOption, href: string}) {
  return <span className="" style={{color: `var(--color-${color})`}}>
    <Link href={href}>
      {children}
    </Link>
  </span>
}