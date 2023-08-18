function Category() {
    return (
        <div className="w-full mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs  mb-2" htmlFor="grid-first-name">
                category
            </label>
            <input
                type="text"
                className={`appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                id="email"
                name="email"
            // onChange={(e) => { handleChange(field.id, e.target.value) }}
            />
        </div>
    )
}