import image from '../assets/img/image.svg';


function App() {
    return (
        <div className="bg-secondary">
            <img src={image} className="Uploader" alt="uploader" />
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            Upload image
        </div>
    );
}

export default App;
