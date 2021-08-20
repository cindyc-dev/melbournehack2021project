import SearchCard from './SearchCard'

export default function SearchList({searchcards, onDelete}) {

    return (
            <div className="search-list">
                {searchcards.map((searchcard) => (
                <SearchCard
                    key={searchcard.id}
                    searchcard={searchcard}
                    onDelete={onDelete} />
            ))}
        </div>
        )
    }