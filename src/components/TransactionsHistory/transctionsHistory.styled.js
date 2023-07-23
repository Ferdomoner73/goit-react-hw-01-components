import styled from '@emotion/styled';

export const Table = styled.table`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    

    padding: 5rem;
    
    background-color: white;

    border-radius: 20px;
`

export const TableHeader = styled.tr`
    display: flex;
    gap: 5rem;
    padding: 0.5rem;
`

export const TableHeaderItem = styled.th`
align-items: start;
text-align: left;
    width: 6rem;
`

export const TableBody = styled.tbody`
    display: flex;
    flex-direction: column;

    gap: 0.5rem;
`