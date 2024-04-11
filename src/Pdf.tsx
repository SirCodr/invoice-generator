import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { Invoice } from './types/invoice';
// Create styles
const styles = StyleSheet.create({
  page: {
    width: '100vw',
    padding: '20px 30px'
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    marginBottom: '40px'
  },
  tableHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  tableItemsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },
  tableRows: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  tableFooter: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  }
});

// Create Document Component
const Pdf = ({ invoice }: { invoice: Invoice }) => {
  return (
    (
  <Document>
    <Page size="A4" style={styles.page}>
      <View id='header' style={styles.header}>
        <View id='header_column1' style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '8px',
          textAlign: 'left',
          width: '50%'
        }}>
          <View>
            <Text>Factura #{invoice.id}</Text>
            -
            <Text>{invoice.date}</Text>
          </View>
          <View>
            <Text>FACTURA</Text>
          </View>
        </View>
        <View id='header_column2' style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: '25px',
          textAlign: 'right',
          width: '50%'
        }}>
          <View>
            <Text>FROM</Text>
            <Text>{invoice.emitter.name}</Text>
            <Text>{invoice.emitter.address}</Text>
            <Text>{invoice.emitter.phone}</Text>
          </View>
          <View>
            <Text>RECIPIENT</Text>
            <Text>{invoice.recipient.name}</Text>
            <Text>{invoice.recipient.address}</Text>
            <Text>{invoice.recipient.phone}</Text>
          </View>
        </View>
      </View>
      <View id='table'>
        <View id='table_header' style={styles.tableHeader}>
          <Text>DESCRIPTION</Text>
          <Text>PRICE</Text>
          <Text>TOTAL</Text>
        </View>
        <View id='table_items_container' style={styles.tableItemsContainer}>
          {invoice.items.map(item => (
            <View style={styles.tableRows}>
              <Text>
                {item.description}
              </Text>
              <View style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '5px'
              }}>
                <Text>
                  {item.price}
                </Text>
                <Text>
                  x{item.quantity}
                </Text>
              </View>
              <Text>
                {item.total}
              </Text>
            </View>
          ))}
        </View>
        <View id='table_footer' style={styles.tableFooter}>
          <View style={{ display: 'flex', width: '100px' }}>
            <Text>TOTAL</Text>
            <Text>{invoice.total}</Text>
          </View>
        </View>
      </View>
    </Page>
  </Document>
)
  )
}

export default Pdf
