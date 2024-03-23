import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { Invoice } from './types/invoice';
// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

// Create Document Component
const Pdf = ({ invoice }: { invoice: Invoice }) => {
  return (
    (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1</Text>
        <View>
          <Text>{invoice.emitter.name}</Text>
        </View>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
)
  )
}

export default Pdf
