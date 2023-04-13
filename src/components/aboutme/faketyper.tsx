import { CodeBlock, hybrid, paraisoLight } from 'react-code-blocks';
import React, { useMemo, useState } from 'react';

import { FC } from '../../util';

interface FakeTyperProps {
    code: string;
}

const FakeTyper: FC<FakeTyperProps> = ({ code }) => {
    const [charCount, setCharCount] = useState(0);
    const introText = `// Start Typing...\n`;
    const codeDisplayed = useMemo(
        () => introText + code.slice(0, charCount),
        [charCount, code, introText]
    );

    const _fakeType = () => {
        setCharCount(charCount + 1);
    };

    const lightMode = matchMedia('(prefers-color-scheme: light)').matches;

    return (
        <div tabIndex={0} onKeyDown={_fakeType} className="my-4 hidden sm:block">
            <CodeBlock
                text={codeDisplayed}
                language="javascript"
                theme={lightMode ? paraisoLight : hybrid}
                showLineNumbers={false}
                wrapLongLines
            />
        </div>
    );
};

export default FakeTyper;
