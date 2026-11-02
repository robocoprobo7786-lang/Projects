import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Canara Old Boys Association | Membership Portal', description: 'Membership, receipts, locations and endowment donor management for Canara High School Old Boys Association.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
