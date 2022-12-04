import PropTypes from 'prop-types';
import {TableTransaction, Head, Column, Raw } from './TransactionHistory.styled';

export const Transaction = ({ items }) => {
    return (<TableTransaction>
        <Head>
            <tr>
                <Column>type</Column>
                <Column>amount</Column>
                <Column>currency</Column>
            </tr>
        </Head>
        <tbody>
            {items.map(({ id, type, amount, currency }) => (
                <Raw key={id}>
                    <Column>{type}</Column>
                    <Column>{amount}</Column>
                    <Column>{currency}</Column>
                </Raw>
            ))}
        </tbody>
    </TableTransaction>);
};

Transaction.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    ),
};