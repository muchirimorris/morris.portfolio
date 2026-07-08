import React, { forwardRef } from 'react';

const Page = forwardRef(({ children, isCover = false, pageNumber }, ref) => {
    return (
        <div className={`page ${isCover ? 'page-cover' : 'page-content'}`} ref={ref}>
            <div className="page-inner h-full w-full">
                {children}
            </div>
            {!isCover && pageNumber !== undefined && (
                <div className="page-footer absolute bottom-4 w-full text-center text-sm text-gray-500">
                    {pageNumber}
                </div>
            )}
        </div>
    );
});

Page.displayName = 'Page';

export default React.memo(Page);
