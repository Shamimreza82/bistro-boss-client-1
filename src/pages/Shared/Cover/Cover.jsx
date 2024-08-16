

const Cover = ({manuImg, title, }) => {
    return (
        <div>
            <div
                className="hero h-[700px]"
                style={{ backgroundImage: `url("${manuImg}")`}}>

                <div className=" bg-opacity-60"></div>
                <div className="hero-content text-white text-center bg-transparent bg-slate-950 bg-opacity-45 p-12 px-24">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                        <p className="mb-5">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cover;