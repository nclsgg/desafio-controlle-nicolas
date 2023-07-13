import { Registry } from "@common/mockedRegistry";
import './styles.css';

interface IProps {
  registry: Registry[]
}

function RegistryList({ registry }: IProps) {
  return (
    <table className="registry-list">
      <thead>
        <tr className="registry-list__header">
          <th>Tipo</th>
          <th>Conta</th>
          <th>Categoria</th>
          <th>Usuário</th>
          <th>Valor</th>
          <th>Centro de Custo</th>
          <th>Tags</th>
        </tr>
      </thead>
      <tbody>
        {registry.map((item, index) => (
          <tr key={index} className="registry-list__body__item">
            <td>{item.type}</td>
            <td>{item.account}</td>
            <td>{item.category}</td>
            <td>{item.user}</td>
            <td>R${item.value}</td>
            <td>{item.costCenter}</td>
            <td className="registry-list__body__item__tags">
              {item.tags.map((tag, index) => (
                <div key={index} className="registry-list__body__item__tags__tag">
                  {tag}
                </div>
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default RegistryList;