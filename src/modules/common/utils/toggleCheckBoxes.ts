export default (containerId, checked) => {
  const container = document.getElementById(containerId);
  const elements = container.getElementsByTagName('input');

  // tslint:disable-next-line
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];

    if (element.type === 'checkbox') {
      element.checked = checked;
    }
  } 
};
