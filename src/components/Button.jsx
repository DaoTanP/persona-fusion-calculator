function Button({ content, href, onclick, ...props }) {
    let Component = 'button';
    const p = { ...props };

    if (href) {
        Component = 'a';
        p.href = href;
    }
    if (onclick) {
        p.onClick = onclick;
    }

    return (
        <Component {...p} className="btn btn-filled rounded-sm float-right">
            {content}
        </Component>
    );
}

export default Button;