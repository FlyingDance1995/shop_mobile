import utils from '@/utils'

export default function ({ store, redirect }) {
  // If the user is not authenticated redirect to login page
  const cookie = utils.getCookies();
  if (!cookie.get('token')) {
    return redirect('/login');
  }
}
