export default function Container(props: React.HTMLProps<HTMLDivElement>) {
    return <div {...props} className={"container px-4 mx-auto " + props.className}>
    </div>
}