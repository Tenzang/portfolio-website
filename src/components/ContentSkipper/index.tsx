import { Link } from 'gatsby';
import React from 'react';

export default () => {
    const focusMain = () => {
        document.getElementById('main')?.focus();
    };

    return (
        <Link
            to="#about"
            id="content-skipper"
            onClick={focusMain}
            className="absolute left-4 bg-light-secondary dark:bg-dark-secondary -top-10 focus:-top-1 transition-all p-2 rounded-b-2xl focus-visible:bg-light-highlight dark:focus-visible:bg-dark-highlight focus-visible:text-light-primary dark:focus-visible:text-dark-primary"
        >
            skip to content
        </Link>
    );
};
