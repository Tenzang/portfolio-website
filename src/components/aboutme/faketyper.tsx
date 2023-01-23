import { CodeBlock, hybrid } from 'react-code-blocks';
import { Box } from '@material-ui/core';
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

    return (
        <Box maxWidth="md" onKeyDown={_fakeType} tabIndex={0} my={3}>
            <CodeBlock
                text={codeDisplayed}
                language="javascript"
                theme={hybrid}
                wrapLines
                showLineNumbers={false}
            />
        </Box>
    );
};

export default FakeTyper;
