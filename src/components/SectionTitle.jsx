
const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="mx-auto w-80 mt-6">
            <h3 className="text-center italic text-yellow-700">--- {subHeading} ---</h3>
            <p className="text-center font-bold lg:text-3xl border-y-4 py-3 my-4  ">{heading}</p>
        </div>
    );
};

export default SectionTitle;