#Simple assignment
from selenium.webdriver import Chrome
from selenium.webdriver import Firefox
from selenium.webdriver import FirefoxProfile
from selenium.webdriver import DesiredCapabilities
from selenium.webdriver.common.keys import Keys
from selenium.webdriver import ActionChains

proxy = "127.0.0.1:3128"

firefox_capabilities = DesiredCapabilities.FIREFOX
firefox_capabilities['marionette'] = True

firefox_capabilities['proxy'] = {
    "proxyType": "manual",
    "httpProxy": proxy,
    "ftpProxy": proxy,
    "sslProxy": proxy
}

driver = Firefox(capabilities=firefox_capabilities)
driver.get("https://google.ru")
el = driver.find_element_by_id("gb_70").click()

driver.find_element_by_id("identifierId").click()
driver.find_element_by_id("identifierId").send_keys("devskyfly@gmail.com"+Keys.ENTER)
driver.find_element_by_name("password").send_keys("djkgfkvfu314"+Keys.ENTER)


#actions = ActionChains(driver)
#actions.move_to_element(input1).send_keys("myusername").perform()