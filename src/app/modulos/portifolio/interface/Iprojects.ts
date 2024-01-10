export interface Iprojects{
    src: string,
    alt: string,
    title: string,
    width: number,
    height: number,
    description:string,
    links:[
        {
            name: string,
            href: string,
        }
    ];
}