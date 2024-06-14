const getDashboards = async() => {
    try {
        const resp = await fetch('/api/dashboards');
        if (resp.status !== 200) {
            const { error } = await resp.json();
            return { error };
        }
        return { data: await resp.json() };
    } catch (error) {
        console.error(error);
        return { error: 'Failed to get dashboards' };
    }
}

export default getDashboards