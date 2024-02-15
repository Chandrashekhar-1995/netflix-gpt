const VideoTitle =({title, overview})=>{
    return(
        <div className="p-36 px-12">
            <h1 className="text-6xl font-bold">{title}</h1>
            <p className="py-6 text-lg w-1/4">{overview}</p>
            <div>
                <button className="bg-black p-4 px-12 text-lg text-white cursor-pointer rounded-lg">▶️ Play</button>
                <button className="bg-black p-4 mx-8 px-12 text-lg text-white cursor-pointer rounded-lg">More</button>
            </div>
        </div>
    )
};

export default VideoTitle;