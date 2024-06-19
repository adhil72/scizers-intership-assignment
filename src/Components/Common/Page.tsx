export default function Page(props: React.HTMLProps<HTMLDivElement>) {
    return (
        <div {...props} className={"w-full h-screen flex flex-col overflow-auto bg-white dark:bg-red-800 " + props.className}>
        </div>
    );
}