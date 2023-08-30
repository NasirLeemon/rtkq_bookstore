import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const bookApi = createApi({
    reducerPath : 'api',
    baseQuery : fetchBaseQuery({
        baseUrl : 'http://localhost:9000'
    }),
    tagTypes : ['Books', 'Book'],

    endpoints : (builder) => ({
        getBooks : builder.query({
            query : () => '/books',
            providesTags : ['Books'],
        }),
        getBook : builder.query({
            query : (id) => `/books/${id}`,
            invalidatesTags : (result, arg, error) => [
                {type: 'Book', id: arg}
            ]
        }),
        addBook : builder.mutation({
            query : (data) => ({
                url : '/books',
                method : 'POST',
                body : data,
            }),
            invalidatesTags : ['Books'],
        }),
        editBook : builder.mutation({
            query : ({id, data}) => ({
                url : `/books/${id}`,
                method : 'PATCH',
                body : data,
            }),
            invalidatesTags : (result, arg, error) => [
                'Books',
                {type: 'Book', id: arg.id}
            ]
        }),
        deleteBook : builder.mutation({
            query : (id) => ({
                url : `/books/${id}`,
                method : 'DELETE',
            }),
            invalidatesTags : ['Books'],
        })
    })
})




export const { useGetBooksQuery, useAddBookMutation, useEditBookMutation, useGetBookQuery, useDeleteBookMutation } = bookApi