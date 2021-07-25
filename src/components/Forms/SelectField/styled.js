import styled from 'styled-components';
import media from 'styled-media-query';

export const Label = styled.label`
    margin-top: 1rem;
`;

export const Select = styled.select`
    color: var(--blue);
`;

export const ErrorMessage = styled.div`
    font-size: 12px;
    color: var(--red-600);
    width: 400px;
    margin-top: 0.25rem;
    &:before {
        content: "❌ ";
        font-size: 10px;
    }
    @media (prefers-color-scheme: dark) {
        color: var(--red-300);
    }
`;
