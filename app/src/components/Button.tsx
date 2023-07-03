type ButtonProps = {
    value?: string;
}

/**
 * Botão padrão do sistema
 * @param props Object type ButtonProps
 * @returns component
 */
export function Button(props: ButtonProps) {
    return <button>{props.value != null ? props.value : "Clique me"}</button>;
}