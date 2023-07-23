import styled from '@emotion/styled';

export const ProfileContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

    padding: 0.5rem;
    width: 40rem;
    
    background-color: white;

    border-radius: 20px;
`

export const Description = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

    padding: 1rem;
    gap: 0.3rem;
`

export const Stats = styled.ul`
    display: flex;
    align-items: center;
    
    gap: 1rem;
`

export const EachStat = styled.li`
    display: flex;
    align-items: center;
    flex-direction: column;

    width: 5rem;
    gap: 0.5rem;
    padding: 0.375rem;

    border-radius: 4px;

    background-color: black;
    color: white;
`