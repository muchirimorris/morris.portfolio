import React, { useRef, useState, useCallback, useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip';

const BookWrapper = ({ children }) => {
    const bookRef = useRef(null);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    const onPage = useCallback((e) => {
        setCurrentPage(e.data);
    }, []);

    const onInit = useCallback(() => {
        if (bookRef.current) {
            setTotalPages(bookRef.current.pageFlip().getPageCount());
        }
    }, []);

    return (
        <div className="book-container flex flex-col items-center justify-center min-h-screen bg-dark pt-20 pb-10 px-4 overflow-hidden">
            <div 
                className="book-wrapper w-full max-w-[1200px] flex justify-center items-center" 
                aria-hidden="true" 
                style={{ 
                    aspectRatio: '3/2',
                    maxHeight: 'calc(100vh - 140px)'
                }}
            >
                <HTMLFlipBook
                    width={550}
                    height={733}
                    size="stretch"
                    minWidth={315}
                    maxWidth={1000}
                    minHeight={400}
                    maxHeight={1533}
                    maxShadowOpacity={0.5}
                    showCover={true}
                    mobileScrollSupport={true}
                    useMouseEvents={true}
                    onFlip={onPage}
                    onInit={onInit}
                    className="portfolio-book mx-auto"
                    ref={(component) => (bookRef.current = component)}
                >
                    {children}
                </HTMLFlipBook>
            </div>
            
            {/* Book Controls */}
            {totalPages > 0 && (
                <div className="book-controls flex gap-4 mt-8 items-center text-gray-300 font-mono z-50">
                    <button 
                        onClick={() => bookRef.current?.pageFlip().flipPrev()} 
                        disabled={currentPage === 0}
                        className="px-4 py-2 bg-accent/20 hover:bg-accent/40 text-accent rounded disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                        Previous
                    </button>
                    <span>Page {currentPage + 1} of {totalPages}</span>
                    <button 
                        onClick={() => bookRef.current?.pageFlip().flipNext()} 
                        disabled={currentPage >= totalPages - 1}
                        className="px-4 py-2 bg-accent/20 hover:bg-accent/40 text-accent rounded disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    );
};

export default BookWrapper;
