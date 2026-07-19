body {
    background-color: #0d0e12;
    color: #d1d5db;
    font-family: 'Courier New', Courier, monospace;
    padding: 40px 20px;
    margin: 0;
    text-align: center;
}
.container {
    max-width: 800px;
    margin: 0 auto;
}
h1 {
    color: #38bdf8;
    font-size: 2.5rem;
    margin-bottom: 10px;
    letter-spacing: 2px;
}
.subtitle {
    color: #6b7280;
    margin-bottom: 40px;
}
.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin-top: 20px;
}
.card {
    background-color: #171923;
    border: 1px solid #2d3748;
    border-radius: 8px;
    padding: 25px;
    text-decoration: none;
    color: inherit;
    transition: all 0.2s ease-in-out;
    display: block;
    text-align: left;
}
.card:hover {
    border-color: #38bdf8;
    transform: translateY(-4px);
    box-shadow: 0 4px 20px rgba(56, 189, 248, 0.15);
}
.card h3 {
    color: #f3f4f6;
    margin: 0 0 10px 0;
    font-size: 1.2rem;
}
.card p {
    margin: 0;
    font-size: 0.9rem;
    color: #9ca3af;
    line-height: 1.4;
}