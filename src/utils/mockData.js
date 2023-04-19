function createData(friendlyName, dnsName, environment, endDate) {
  return {
    friendlyName,
    dnsName,
    environment,
    endDate,
  };
}

const data = [
  createData(
    'Friendly Name',
    'DNS Name',
    'Environment',
    '21/11/2021, 02:33 a.m'
  ),
  createData('Test Name', 'ANS Name', 'Environment', '21/11/2021, 02:33 a.m'),
  createData('Ddd Name', 'BNS Name', 'Environment', '21/11/2021, 02:33 a.m'),
  createData('Xddfd Name', 'CNS Name', 'Environment', '21/11/2021, 02:33 a.m'),
  createData(
    'Griendly Name',
    'DNS Name',
    'Environment',
    '21/11/2021, 02:33 a.m'
  ),
  createData(
    'Triendly Name',
    'DNS Name',
    'Environment',
    '21/11/2021, 02:33 a.m'
  ),
];

export default data;
