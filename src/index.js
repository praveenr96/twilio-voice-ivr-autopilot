function getGreetingActions() {
    const message = `Thanks for calling spritle software`;
    actions = [
        {
            say: message,
        },
        {
            redirect: 'task://main-menu',
        },
    ];
    return actions;
}

