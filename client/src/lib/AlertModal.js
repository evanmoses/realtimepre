import Swal from 'sweetalert2/src/sweetalert2.js'

const AlertModal = Swal.mixin({
  width: 400,
  padding: 25,
  confirmButtonText: 'Confirm'
})

export default AlertModal;
