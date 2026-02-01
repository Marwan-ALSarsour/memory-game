const Header = ({ score, bestScore }) => (
    <header>
        <h1>Pokemon Memory Game</h1>
        <div className="score-board">
            <p>Current Score: {score}</p>
            <p>Best Score: {bestScore}</p>
        </div>
    </header>
);
export default Header;