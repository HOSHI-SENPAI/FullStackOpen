import Image from "next/image";
import Link from "next/link";

import { footerLinks } from "@/constant";

type ColumnProps = {
    title: string;
    links: Array<string>;
};

const FooterColumn = ({ title, links }: ColumnProps) => (
    <div className="footer_column">
        <h4 className="font-semibold">{title}</h4>
        <ul className="flex flex-col gap-2 font-normal">
            {links.map((link) => <Link href="/" key={link}>{link}</Link>)}
        </ul>
    </div>
);

const Footer = () => (
    <section className="flexStart footer">
        <div className="flex flex-col gap-12 w-full">
            <div className="flex items-start flex-col">
                <Image src="/logo-purple.svg" width={116} height={38} alt="logo" />
                <div className="flexBetween footer_copyright">
                <p>@ 2023 Talento. All rights reserved</p>
                </div>
            </div>
            
        </div>

        
    </section>
);

export default Footer;