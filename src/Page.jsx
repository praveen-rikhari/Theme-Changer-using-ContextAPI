import React, { useContext } from 'react';
import { ThemeContext } from './App';

function Page() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <header className="App-header">
            <div className="content">
                <div className="left-section">
                    <img
                        src="https://i.pinimg.com/originals/bb/13/7e/bb137efded35242e4f82704a2f5ed7f6.jpg"
                        alt="Cricket Image"
                        className="landing-image"
                    />
                </div>
                <div className="right-section">
                    <h1>Welcome to Cricket World 🏏</h1>
                    <p>
                        Explore the world of cricket with our latest updates, scores, and
                        news. Join us in celebrating the spirit of the game!
                    </p>
                    <button className="cta-button" onClick={toggleTheme} >
                        Enable {theme === 'light' ? 'dark' : 'light'} mode
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Page;