export default function Container(props: React.HTMLProps<HTMLDivElement>) {
    return <div {...props} className={"container mx-auto " + props.className}>
    </div>
}