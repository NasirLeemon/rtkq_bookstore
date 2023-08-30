import React, { useState } from 'react'
import Book from './Book'
import { useGetBooksQuery } from '../../features/api/bookApi'
import BookLoader from '../../ui/BookLoader'
import { useSelector } from 'react-redux'

const Books = () => {
    const [showFeatured, setShowFeatured] = useState(false);
    const { searchKey } = useSelector(state => state.booksFilterInfo)

    const { data: books, isError, isLoading } = useGetBooksQuery()

    let content = null

    if (isLoading) {
        content =
            <>
                <BookLoader />
                <BookLoader />
                <BookLoader />
                <BookLoader />
            </>
    }

    const filteredBooks = showFeatured ? books?.filter(book => book.featured) : books || {}

    const searchFilter = (book) => book?.name?.toLowerCase()?.includes(searchKey)

    if (isError && !isLoading) content = <div>There is en error occured</div>

    if (!isLoading && !isError && books?.length === 0) content = <div> No books Found </div>

    if (!isLoading && !isError && books?.length > 0) {
        content = filteredBooks?.filter(searchFilter).map(book => <Book key={book?.id} book={book} />)
    }



    return (
        <>
            <div className="flex items-center justify-between mb-12">
                <h4 className="mt-2 text-xl font-bold">Book List</h4>

                <div className="flex items-center space-x-4">
                    <button onClick={()=>setShowFeatured(false)} className="lws-filter-btn active-filter">All</button>
                    <button onClick={()=>setShowFeatured(true)} className="lws-filter-btn">Featured</button>
                </div>
            </div>
            <div className="space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6">
                {content}
            </div>
        </>
    )
}

export default Books