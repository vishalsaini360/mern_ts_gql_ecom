import styled from 'styled-components'

export const Wrapper = styled.div`
    position: absolute;
    width: calc(100% - 30rem);
    left: 30rem;
    min-height: 100vh;
    background: var(--white);
    transition: 0.5s;
    .active {
        width: calc(100% - 8rem);
        left: 8rem;
    }
`;
export const Details = styled.div`
    position: relative;
    width: 100%;
    padding: 2rem;
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 3rem;
`;
export const RecentOrders =styled.div `
    position: relative;
    display: grid;
    min-height: 50rem;
    background: var(--white);
    padding: 2rem;
    box-shadow: 0 7px 25px rgba(0, 0, 0, 0.08);
    border-radius: 2rem;
`;
export const CardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`;
export const H2 = styled.h2`

`;
export const Link = styled(Link)`

`;