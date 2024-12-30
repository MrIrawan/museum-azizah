const GalleryFragment = ({ data }) => {
    return (
        <>
        {data.map((data, index) => (
        <div className="w-full overflow-hidden rounded-lg" key={index}>
            <img src={data.image} alt={index + 1} className="scale-110"/>
        </div>
        ))}
        </>
    )
}

export default GalleryFragment;