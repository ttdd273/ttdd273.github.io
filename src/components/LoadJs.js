export const appendScript = (scriptToAppend) => {
    const script = document.createElement("script");
    script.src = scriptToAppend;
    script.async = true;

    script.onload = () => this.scriptLoaded();

    document.body.appendChild(script);
}

