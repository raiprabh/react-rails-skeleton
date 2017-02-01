require 'test_helper'

class RouterControllerTest < ActionDispatch::IntegrationTest
  test "should get client" do
    get router_client_url
    assert_response :success
  end

end
