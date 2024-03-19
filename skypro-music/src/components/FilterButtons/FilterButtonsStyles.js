import styled from 'styled-components'

export const FilterTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-right: 15px;
`

export const FilterItem = styled.li`
  color: ${props=> props.$props ? `#B672FF` : `#FFF`};
  font-variant-numeric: lining-nums proportional-nums;
  font-size: 20px;
  font-style: normal;
  font-weight: ${props=> props.$props ? `700` : `400`};
  line-height: 24px;
  &:hover {
    color: #B672FF;
    text-decoration-line: underline;
  }
`

export const FilterList = styled.ul`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 28px;
  overflow: scroll;
  overflow-y: scroll;
  width: 187px;
  height: 232px;
  &::-webkit-scrollbar {
    width: 4px;
    height: 0px;
  }
  &::-webkit-scrollbar-track {
    background-color: #4B4949;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #FFFFFF;
    border-radius: 2px;
  }
`
export const FilterListGenre = styled.ul`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 28px;
  width: 222px;
  &::-webkit-scrollbar {
    width: 4px;
    height: 0px;
  }
  &::-webkit-scrollbar-track {
    background-color: #4B4949;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #FFFFFF;
    border-radius: 2px;
  }
`
export const FilterBox = styled.div`
  padding: 34px;
  border-radius: 12px;
  background: #313131;
  /* height: 305px; */
  position: absolute;
  top: 50px;
  left: 0px;
`

export const  FilterBoxTime = styled(FilterBox)`
  left: -125px;
`
export const FilterButtonBox = styled.div`
  position: relative;
`

export const Counter = styled.div`
  width: 26px;
  height: 26px;
  border-radius: 13px;
  background: #AD61FF;
  position: absolute;
  color: #FFF;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 13px;
  text-align: center;
  padding-top: 6.5px;
  top: -10px;
  left: 148px;
`

export const CounterAuthor = styled(Counter)`
  left: 120px;
`

export const CounterGenre = styled(Counter)`
  left: 70px;
`


export const FilterButton = styled.button`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid;
  border-color: ${props => props.$props ? "#ad61ff" : "#ffffff"};
  border-radius: 60px;
  padding: 6px 20px;
  color: ${props => props.$props ? "#ad61ff" : "#ffffff"};
  cursor: pointer;
  background-color: transparent;
  /* width: 165px; */
`

export const FilterButtonAuthor = styled(FilterButton)`
  margin-right: 10px;
`
export const FilterButtonTime = styled(FilterButton)`
  width: 166px;
`

export const FilterDiv = styled.div`
  display:flex;
  flex-direction: row;
  align-items: center;
`