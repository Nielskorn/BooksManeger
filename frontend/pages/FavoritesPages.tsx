function FavoritesPage() {

    const styles = {
        container: {
            padding: "2rem",
            textAlign: "center",
            backgroundColor: "white",
            minHeight: "100vh",
        },
        title: {
            fontSize: "2.5rem",
            color: "darkgreen",
            marginBottom: "1rem",
        },
        text: {
            fontSize: "1.2rem",
            color: "darkslategray",
            marginBottom: "2rem",
        },
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Favoriten</h1>
            <p style={styles.text}>Hier sind deine Lieblingsbücher!</p>
        </div>
    );
}

export default FavoritesPage;