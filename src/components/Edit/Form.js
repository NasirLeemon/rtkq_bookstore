import React, { useState } from 'react'
import { useEditBookMutation } from '../../features/api/bookApi';
import { useNavigate } from 'react-router-dom';

const Form = ({book}) => {
  const [editBook, {isLoading, isSuccess}] = useEditBookMutation()

    const navigate = useNavigate()
    const {
        id,
         name: initalName,
        author: initialAuthor,
        thumbnail: initialThumbnail,
        price: initialPrice,
        rating: initialRating,
        featured: initialFeatured } = book || {}
        
    const [name, setName] = useState(initalName);
    const [author, setAuthor] = useState(initialAuthor);
    const [thumbnail, setThumbnail] = useState(initialThumbnail);
    const [price, setPrice] = useState(initialPrice);
    const [rating, setRating] = useState(initialRating);
    const [featured, setFeatured] = useState(initialFeatured);

const handleSubmit = (e) => {
    e.preventDefault()
    editBook({
        id,
        data : {
            name,
            author,
            thumbnail,
            price,
            rating,
            featured
        }
    })
}


isSuccess && navigate('/')




  return (
    <form className="book-form" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label for="lws-bookName">Book Name</label>
              <input
                required
                value={name}
                onChange={(e)=> setName(e.target.value)}
                className="text-input"
                type="text"
                id="lws-bookName"
                name="name"
              />
            </div>

            <div className="space-y-2">
              <label for="lws-author">Author</label>
              <input
               value={author}
               onChange={(e)=> setAuthor(e.target.value)}
                required
                className="text-input"
                type="text"
                id="lws-author"
                name="author"
              />
            </div>

            <div className="space-y-2">
              <label for="lws-thumbnail">thumbnail Url</label>
              <input
                required
                value={thumbnail}
                onChange={(e)=> setThumbnail(e.target.value)}
                className="text-input"
                type="text"
                id="lws-thumbnail"
                name="thumbnail"
              />
            </div>

            <div className="grid grid-cols-2 gap-8 pb-4">
              <div className="space-y-2">
                <label for="lws-price">Price</label>
                <input
                  required
                  value={price}
                  onChange={(e)=> setPrice(e.target.value)}
                  className="text-input"
                  type="number"
                  id="lws-price"
                  name="price"
                />
              </div>

              <div className="space-y-2">
                <label for="lws-rating">Rating</label>
                <input
                  required
                  value={rating}
                  onChange={(e)=> setRating(parseInt(e.target.value))}
                  className="text-input"
                  type="number"
                  id="lws-rating"
                  name="rating"
                  min="1"
                  max="5"
                />
              </div>
            </div>

            <div className="flex items-center">
              <input
               value={featured}
               checked={featured || false}
               onChange={(e)=>setFeatured(e.target.checked)}
                id="lws-featured"
                type="checkbox"
                name="featured"
                className="w-4 h-4"
              />
              <label for="lws-featured" className="ml-2 text-sm">
                {" "}
                This is a featured book{" "}
              </label>
            </div>

            <button type="submit" disabled={isLoading} className="submit" id="lws-submit">
              Add Book
            </button>
            {isSuccess && <div> Books was Edited Successfully</div>}
          </form>
  )
}

export default Form