
const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="mx-auto w-64">
                <p className="text-center font-bold lg:text-3xl border-y-4 p-4  ">{heading}</p>
                <h3 className="text-center p-6 italic text-blue-600">{subHeading}</h3>
        </div>
    );
};

export default SectionTitle;