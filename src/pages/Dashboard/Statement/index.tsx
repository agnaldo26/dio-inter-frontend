import { useState, useEffect } from "react";

import {
  StatementItemContainer,
  StatementItemImage,
  StatementItemInfo,
  StatementContainer,
} from "./styles";
import { transactions } from "../../../services/resources/pix";
import { FiDollarSign } from "react-icons/fi";
import { format } from "date-fns";

interface StatementItemData {
  user: {
    firstName: string;
    lastName: string;
  };
  value: number;
  type: "paid" | "received";
  updatedAt: Date;
}

const StatementItem = ({ user, value, type, updatedAt }: StatementItemData) => {
  return (
    <StatementItemContainer>
      <StatementItemImage type={type}>
        <FiDollarSign size={24} />
      </StatementItemImage>
      <StatementItemInfo>
        <p className="primary-color">
          {value.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
        <p>
          {type === "paid" ? "Pago à " : "Recebido de "}
          <strong>
            {user.firstName} {user.lastName}
          </strong>
        </p>
        <p>{format(new Date(updatedAt), "dd/MM/yyyy 'às' HH:mm:'h'")}</p>
      </StatementItemInfo>
    </StatementItemContainer>
  );
};

const Statement = () => {
  const [statements, setStatements] = useState<StatementItemData[]>([]);

  const getAllTransactions = async () => {
    const { data } = await transactions();

    setStatements(data.transactions);
  };

  useEffect(() => {
    getAllTransactions();
  }, []);

  return (
    <StatementContainer>
      {statements.length > 0 &&
        statements.map((statement) => <StatementItem {...statement} />)}
    </StatementContainer>
  );
};

export default Statement;
