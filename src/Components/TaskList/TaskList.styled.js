import styled from "styled-components";

export const StyledUl = styled.ul`
      display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
  list-style: none;
  margin: 0;
   li {
  flex: 1 1 220px;  
  max-width: 250px;

  background: #fff;
  border-radius: 12px;
  padding: 16px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: 0.2s;
}

    li:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
}

li p:first-child {
  font-size: 13px;
  color: #999;
  margin-bottom: 6px;
}

li p:nth-child(2) {
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 15px;
}

button {
  margin-top: auto;

  padding: 8px;
  border: none;
  border-radius: 8px;

  background: #ff4d4f;
  color: white;

  cursor: pointer;
  transition: 0.2s;
}

button:hover {
  background: #d9363e;
}

`   