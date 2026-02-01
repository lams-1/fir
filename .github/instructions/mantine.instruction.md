# Mantine

Mantine is a fully featured React component library providing over 100 customizable components and 50+ hooks for building modern web applications. Built with TypeScript, it offers a comprehensive design system with support for dark mode, responsive design, accessibility features, and extensive theming capabilities. The library follows a modular architecture with separate packages for core components (`@mantine/core`), hooks (`@mantine/hooks`), forms (`@mantine/form`), dates (`@mantine/dates`), charts (`@mantine/charts`), and additional extensions for notifications, modals, spotlight search, rich text editing, and file uploads.

The framework is designed around a MantineProvider that controls theming, color schemes, and global styles throughout the application. Components support a consistent API with props for styling (`className`, `style`), variants (`variant`), sizes (`size`), colors (`color`), and responsive values. Mantine integrates seamlessly with Next.js, Remix, Vite, and other React frameworks, offering both controlled and uncontrolled component patterns with full SSR compatibility.

## MantineProvider Setup

The MantineProvider is the root component that provides theme context, color scheme management, and CSS variables to all Mantine components. It must wrap your application at the root level.

```tsx
import { MantineProvider, createTheme, Button, Text } from '@mantine/core';
import '@mantine/core/styles.css';

const theme = createTheme({
  primaryColor: 'violet',
  fontFamily: 'Inter, sans-serif',
  defaultRadius: 'md',
  colors: {
    brand: [
      '#f0f5ff', '#e0ebff', '#c7d9ff', '#a3c4ff',
      '#7aabff', '#4d8eff', '#2670ff', '#0052e0',
      '#0041b3', '#003380'
    ],
  },
  components: {
    Button: {
      defaultProps: { size: 'md', variant: 'filled' },
    },
  },
});

function App() {
  return (
    <MantineProvider theme={theme} defaultColorScheme="auto">
      <Text>Your application content</Text>
      <Button color="brand">Themed Button</Button>
    </MantineProvider>
  );
}
```

## Button Component

Button is a versatile component supporting multiple variants (filled, outline, light, subtle, transparent, white), sizes, colors, loading states, and icon sections. It can render as different HTML elements using polymorphic composition.

```tsx
import { Button, Group, Stack } from '@mantine/core';
import { IconDownload, IconStar } from '@tabler/icons-react';

function ButtonDemo() {
  const [loading, setLoading] = useState(false);

  return (
    <Stack>
      {/* Basic variants */}
      <Group>
        <Button variant="filled">Filled</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="light">Light</Button>
        <Button variant="subtle">Subtle</Button>
        <Button variant="gradient" gradient={{ from: 'blue', to: 'cyan' }}>
          Gradient
        </Button>
      </Group>

      {/* With icons and sections */}
      <Group>
        <Button leftSection={<IconDownload size={16} />}>Download</Button>
        <Button rightSection={<IconStar size={16} />} variant="outline">
          Favorite
        </Button>
      </Group>

      {/* Loading state */}
      <Button
        loading={loading}
        onClick={() => {
          setLoading(true);
          setTimeout(() => setLoading(false), 2000);
        }}
      >
        Submit
      </Button>

      {/* Disabled and full width */}
      <Button disabled>Disabled</Button>
      <Button fullWidth>Full Width Button</Button>

      {/* As anchor element */}
      <Button component="a" href="https://mantine.dev" target="_blank">
        External Link
      </Button>
    </Stack>
  );
}
```

## TextInput Component

TextInput provides a styled text input field with support for labels, descriptions, error messages, icons, and various input states. It integrates seamlessly with form libraries.

```tsx
import { TextInput, PasswordInput, NumberInput, Stack } from '@mantine/core';
import { IconAt, IconLock, IconUser } from '@tabler/icons-react';

function InputDemo() {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email: string) => {
    if (!email) return 'Email is required';
    if (!/^\S+@\S+$/.test(email)) return 'Invalid email format';
    return '';
  };

  return (
    <Stack maw={400}>
      {/* Basic text input */}
      <TextInput
        label="Username"
        placeholder="Enter your username"
        description="Choose a unique username"
        leftSection={<IconUser size={16} />}
        withAsterisk
      />

      {/* Email with validation */}
      <TextInput
        label="Email"
        placeholder="your@email.com"
        leftSection={<IconAt size={16} />}
        value={value}
        onChange={(e) => {
          setValue(e.currentTarget.value);
          setError(validateEmail(e.currentTarget.value));
        }}
        error={error}
        withAsterisk
      />

      {/* Password input with visibility toggle */}
      <PasswordInput
        label="Password"
        placeholder="Enter password"
        leftSection={<IconLock size={16} />}
        withAsterisk
      />

      {/* Number input */}
      <NumberInput
        label="Age"
        placeholder="Your age"
        min={0}
        max={120}
        allowDecimal={false}
      />

      {/* Disabled state */}
      <TextInput
        label="Disabled"
        placeholder="Cannot edit"
        disabled
        value="Read only content"
      />
    </Stack>
  );
}
```

## Select Component

Select provides a dropdown selection with search, filtering, grouping, and custom rendering capabilities. It supports both single and controlled selection modes.

```tsx
import { Select, MultiSelect, Stack } from '@mantine/core';

function SelectDemo() {
  const [framework, setFramework] = useState<string | null>(null);
  const [languages, setLanguages] = useState<string[]>([]);

  return (
    <Stack maw={340}>
      {/* Basic select */}
      <Select
        label="Your favorite library"
        placeholder="Pick value"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        value={framework}
        onChange={setFramework}
      />

      {/* Searchable select with clear */}
      <Select
        label="Country"
        placeholder="Search countries"
        searchable
        clearable
        nothingFoundMessage="No country found"
        data={[
          { group: 'North America', items: ['United States', 'Canada', 'Mexico'] },
          { group: 'Europe', items: ['United Kingdom', 'Germany', 'France', 'Spain'] },
          { group: 'Asia', items: ['Japan', 'China', 'India', 'South Korea'] },
        ]}
      />

      {/* Multi-select */}
      <MultiSelect
        label="Programming Languages"
        placeholder="Select languages"
        data={['JavaScript', 'TypeScript', 'Python', 'Rust', 'Go', 'Java']}
        value={languages}
        onChange={setLanguages}
        searchable
        maxValues={3}
      />

      {/* With custom data structure */}
      <Select
        label="User"
        data={[
          { value: '1', label: 'Alice Johnson', disabled: false },
          { value: '2', label: 'Bob Smith', disabled: false },
          { value: '3', label: 'Charlie Brown (Inactive)', disabled: true },
        ]}
        placeholder="Select user"
      />
    </Stack>
  );
}
```

## Modal Component

Modal displays content in an overlay dialog with customizable animations, positioning, and close behavior. It integrates with useDisclosure hook for state management.

```tsx
import { Modal, Button, TextInput, Group, Stack } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function ModalDemo() {
  const [opened, { open, close }] = useDisclosure(false);
  const [confirmOpened, confirmHandlers] = useDisclosure(false);

  return (
    <>
      {/* Basic modal */}
      <Modal opened={opened} onClose={close} title="Authentication" centered>
        <Stack>
          <TextInput label="Email" placeholder="your@email.com" />
          <TextInput label="Password" type="password" placeholder="Password" />
          <Group justify="flex-end" mt="md">
            <Button variant="outline" onClick={close}>Cancel</Button>
            <Button onClick={close}>Sign in</Button>
          </Group>
        </Stack>
      </Modal>

      {/* Confirmation modal */}
      <Modal
        opened={confirmOpened}
        onClose={confirmHandlers.close}
        title="Confirm deletion"
        size="sm"
        centered
        overlayProps={{ backgroundOpacity: 0.55, blur: 3 }}
      >
        <Text size="sm">Are you sure you want to delete this item?</Text>
        <Group justify="flex-end" mt="xl">
          <Button variant="outline" onClick={confirmHandlers.close}>Cancel</Button>
          <Button color="red" onClick={confirmHandlers.close}>Delete</Button>
        </Group>
      </Modal>

      <Group>
        <Button onClick={open}>Open modal</Button>
        <Button color="red" onClick={confirmHandlers.open}>Delete item</Button>
      </Group>
    </>
  );
}
```

## Tabs Component

Tabs organize content into separate views where only one view is visible at a time. Supports controlled/uncontrolled modes, icons, vertical orientation, and multiple style variants.

```tsx
import { Tabs, Badge } from '@mantine/core';
import { IconPhoto, IconMessageCircle, IconSettings } from '@tabler/icons-react';

function TabsDemo() {
  const [activeTab, setActiveTab] = useState<string | null>('gallery');

  return (
    <Tabs value={activeTab} onChange={setActiveTab}>
      <Tabs.List>
        <Tabs.Tab value="gallery" leftSection={<IconPhoto size={12} />}>
          Gallery
        </Tabs.Tab>
        <Tabs.Tab
          value="messages"
          leftSection={<IconMessageCircle size={12} />}
          rightSection={<Badge size="xs" variant="filled">3</Badge>}
        >
          Messages
        </Tabs.Tab>
        <Tabs.Tab value="settings" leftSection={<IconSettings size={12} />}>
          Settings
        </Tabs.Tab>
        <Tabs.Tab value="disabled" disabled>
          Disabled
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="gallery" pt="xs">
        <Text>Gallery content - Photos and images</Text>
      </Tabs.Panel>

      <Tabs.Panel value="messages" pt="xs">
        <Text>Messages content - Chat and notifications</Text>
      </Tabs.Panel>

      <Tabs.Panel value="settings" pt="xs">
        <Text>Settings content - User preferences</Text>
      </Tabs.Panel>
    </Tabs>
  );
}

// Vertical tabs with different variant
function VerticalTabsDemo() {
  return (
    <Tabs orientation="vertical" variant="pills" defaultValue="overview">
      <Tabs.List>
        <Tabs.Tab value="overview">Overview</Tabs.Tab>
        <Tabs.Tab value="analytics">Analytics</Tabs.Tab>
        <Tabs.Tab value="reports">Reports</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="overview" pl="xs">Overview panel</Tabs.Panel>
      <Tabs.Panel value="analytics" pl="xs">Analytics panel</Tabs.Panel>
      <Tabs.Panel value="reports" pl="xs">Reports panel</Tabs.Panel>
    </Tabs>
  );
}
```

## useForm Hook

The useForm hook provides comprehensive form state management with validation, error handling, field manipulation, and submission handling. Supports both controlled and uncontrolled modes.

```tsx
import { useForm } from '@mantine/form';
import { TextInput, NumberInput, Checkbox, Button, Group, Box, Stack } from '@mantine/core';

function FormDemo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      email: '',
      name: '',
      age: undefined as number | undefined,
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      name: (value) => (value.length < 2 ? 'Name must be at least 2 characters' : null),
      age: (value) => {
        if (value === undefined) return 'Age is required';
        if (value < 18) return 'You must be at least 18';
        return null;
      },
      termsOfService: (value) => (value ? null : 'You must accept terms'),
    },

    validateInputOnBlur: true,
  });

  const handleSubmit = form.onSubmit(
    (values) => {
      console.log('Form submitted:', values);
      // { email: 'user@example.com', name: 'John', age: 25, termsOfService: true }
    },
    (errors) => {
      console.log('Validation errors:', errors);
    }
  );

  return (
    <Box maw={400} mx="auto">
      <form onSubmit={handleSubmit}>
        <Stack>
          <TextInput
            withAsterisk
            label="Email"
            placeholder="your@email.com"
            key={form.key('email')}
            {...form.getInputProps('email')}
          />

          <TextInput
            withAsterisk
            label="Name"
            placeholder="Your name"
            key={form.key('name')}
            {...form.getInputProps('name')}
          />

          <NumberInput
            withAsterisk
            label="Age"
            placeholder="Your age"
            min={0}
            max={120}
            key={form.key('age')}
            {...form.getInputProps('age')}
          />

          <Checkbox
            label="I agree to the terms of service"
            key={form.key('termsOfService')}
            {...form.getInputProps('termsOfService', { type: 'checkbox' })}
          />

          <Group justify="flex-end">
            <Button variant="outline" onClick={() => form.reset()}>
              Reset
            </Button>
            <Button type="submit" loading={form.submitting}>
              Submit
            </Button>
          </Group>
        </Stack>
      </form>
    </Box>
  );
}
```

## useForm with Schema Validation (Zod)

useForm integrates with popular validation libraries like Zod, Yup, Joi, and Superstruct through resolver functions for complex validation schemas.

```tsx
import { useForm, zodResolver } from '@mantine/form';
import { z } from 'zod';
import { TextInput, PasswordInput, Button, Stack, Box } from '@mantine/core';

const schema = z.object({
  email: z.string().email('Invalid email address'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Must contain uppercase letter')
    .regex(/[0-9]/, 'Must contain number'),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword'],
});

function ZodFormDemo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    validate: zodResolver(schema),
  });

  return (
    <Box maw={400} mx="auto">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <Stack>
          <TextInput
            label="Email"
            placeholder="your@email.com"
            key={form.key('email')}
            {...form.getInputProps('email')}
          />
          <PasswordInput
            label="Password"
            placeholder="Create password"
            key={form.key('password')}
            {...form.getInputProps('password')}
          />
          <PasswordInput
            label="Confirm Password"
            placeholder="Confirm password"
            key={form.key('confirmPassword')}
            {...form.getInputProps('confirmPassword')}
          />
          <Button type="submit">Create Account</Button>
        </Stack>
      </form>
    </Box>
  );
}
```

## useForm with List Fields

useForm provides methods to manipulate list/array fields including insert, remove, reorder, and replace operations.

```tsx
import { useForm } from '@mantine/form';
import { TextInput, Button, Group, ActionIcon, Stack, Box } from '@mantine/core';
import { IconTrash, IconPlus } from '@tabler/icons-react';

function ListFieldsDemo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      employees: [{ name: '', email: '' }],
    },
    validate: {
      employees: {
        name: (value) => (value.length < 2 ? 'Name too short' : null),
        email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      },
    },
  });

  const fields = form.getValues().employees.map((item, index) => (
    <Group key={index} mt="xs">
      <TextInput
        placeholder="Name"
        style={{ flex: 1 }}
        key={form.key(`employees.${index}.name`)}
        {...form.getInputProps(`employees.${index}.name`)}
      />
      <TextInput
        placeholder="Email"
        style={{ flex: 1 }}
        key={form.key(`employees.${index}.email`)}
        {...form.getInputProps(`employees.${index}.email`)}
      />
      <ActionIcon
        color="red"
        onClick={() => form.removeListItem('employees', index)}
        disabled={form.getValues().employees.length === 1}
      >
        <IconTrash size={16} />
      </ActionIcon>
    </Group>
  ));

  return (
    <Box maw={600} mx="auto">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <Stack>
          {fields}

          <Button
            variant="outline"
            leftSection={<IconPlus size={16} />}
            onClick={() => form.insertListItem('employees', { name: '', email: '' })}
          >
            Add Employee
          </Button>

          <Group justify="flex-end">
            <Button type="submit">Submit</Button>
          </Group>
        </Stack>
      </form>
    </Box>
  );
}
```

## useDisclosure Hook

useDisclosure manages boolean state for modals, drawers, menus, and other toggleable components with convenient open, close, and toggle handlers.

```tsx
import { useDisclosure } from '@mantine/hooks';
import { Modal, Drawer, Button, Group, Stack } from '@mantine/core';

function DisclosureDemo() {
  // Basic usage
  const [modalOpened, modalHandlers] = useDisclosure(false);

  // With callbacks
  const [drawerOpened, drawerHandlers] = useDisclosure(false, {
    onOpen: () => console.log('Drawer opened'),
    onClose: () => console.log('Drawer closed'),
  });

  // Multiple independent disclosures
  const [confirmOpened, { open: openConfirm, close: closeConfirm }] = useDisclosure();

  return (
    <>
      <Modal opened={modalOpened} onClose={modalHandlers.close} title="Modal Title">
        <Text>Modal content here</Text>
        <Button onClick={modalHandlers.close}>Close</Button>
      </Modal>

      <Drawer opened={drawerOpened} onClose={drawerHandlers.close} title="Navigation">
        <Text>Drawer navigation content</Text>
      </Drawer>

      <Stack>
        <Group>
          <Button onClick={modalHandlers.open}>Open Modal</Button>
          <Button onClick={modalHandlers.toggle}>Toggle Modal</Button>
        </Group>
        <Button onClick={drawerHandlers.open}>Open Drawer</Button>
      </Stack>
    </>
  );
}
```

## useLocalStorage Hook

useLocalStorage synchronizes React state with browser localStorage, supporting serialization, default values, and cross-tab synchronization.

```tsx
import { useLocalStorage, readLocalStorageValue } from '@mantine/hooks';
import { TextInput, Switch, Button, Stack, Text, Group } from '@mantine/core';

function LocalStorageDemo() {
  // String value
  const [username, setUsername, removeUsername] = useLocalStorage<string>({
    key: 'username',
    defaultValue: '',
  });

  // Object value with custom serialization
  const [settings, setSettings] = useLocalStorage<{ theme: string; notifications: boolean }>({
    key: 'user-settings',
    defaultValue: { theme: 'light', notifications: true },
  });

  // Disable cross-tab sync
  const [privateData, setPrivateData] = useLocalStorage({
    key: 'private-data',
    defaultValue: '',
    sync: false,
  });

  // Read value outside component
  const readValueOnDemand = () => {
    const storedUsername = readLocalStorageValue<string>({
      key: 'username',
      defaultValue: 'Guest',
    });
    console.log('Stored username:', storedUsername);
  };

  return (
    <Stack maw={400}>
      <TextInput
        label="Username (persisted)"
        value={username}
        onChange={(e) => setUsername(e.currentTarget.value)}
      />

      <Group>
        <Button onClick={removeUsername} variant="outline" color="red">
          Clear Username
        </Button>
        <Button onClick={readValueOnDemand}>Read Value</Button>
      </Group>

      <Switch
        label="Enable notifications"
        checked={settings.notifications}
        onChange={(e) => setSettings({ ...settings, notifications: e.currentTarget.checked })}
      />

      <Text size="sm" c="dimmed">
        Current theme: {settings.theme}
      </Text>
    </Stack>
  );
}
```

## useMediaQuery Hook

useMediaQuery tracks CSS media query matches for responsive behavior, returning a boolean indicating whether the query matches.

```tsx
import { useMediaQuery } from '@mantine/hooks';
import { Badge, Stack, SimpleGrid, Card, Text, em } from '@mantine/core';

function MediaQueryDemo() {
  // Check viewport width
  const isMobile = useMediaQuery('(max-width: 768px)');
  const isTablet = useMediaQuery('(min-width: 769px) and (max-width: 1024px)');
  const isDesktop = useMediaQuery('(min-width: 1025px)');

  // Using em helper for consistent breakpoints
  const isSmall = useMediaQuery(`(max-width: ${em(750)})`);

  // Other media features
  const prefersDark = useMediaQuery('(prefers-color-scheme: dark)');
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  const isPortrait = useMediaQuery('(orientation: portrait)');

  // Responsive columns
  const columns = isMobile ? 1 : isTablet ? 2 : 3;

  return (
    <Stack>
      <Badge color={isMobile ? 'red' : isTablet ? 'yellow' : 'green'}>
        {isMobile ? 'Mobile' : isTablet ? 'Tablet' : 'Desktop'}
      </Badge>

      <Text size="sm">
        User prefers: {prefersDark ? 'Dark mode' : 'Light mode'}
      </Text>

      <SimpleGrid cols={columns}>
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <Card key={i} shadow="sm" padding="lg" withBorder>
            <Text>Card {i}</Text>
          </Card>
        ))}
      </SimpleGrid>
    </Stack>
  );
}
```

## useDebouncedValue Hook

useDebouncedValue delays updating a value until a specified time has passed since the last change, useful for search inputs and API calls.

```tsx
import { useState } from 'react';
import { useDebouncedValue, useDebouncedCallback } from '@mantine/hooks';
import { TextInput, Text, Stack, Loader, Box } from '@mantine/core';

function DebouncedSearchDemo() {
  const [searchTerm, setSearchTerm] = useState('');
  const [debounced] = useDebouncedValue(searchTerm, 300);
  const [results, setResults] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  // Simulated API search
  useEffect(() => {
    if (debounced) {
      setLoading(true);
      // Simulate API call
      setTimeout(() => {
        setResults([
          `Result for "${debounced}" #1`,
          `Result for "${debounced}" #2`,
          `Result for "${debounced}" #3`,
        ]);
        setLoading(false);
      }, 500);
    } else {
      setResults([]);
    }
  }, [debounced]);

  return (
    <Box maw={400}>
      <TextInput
        label="Search"
        placeholder="Type to search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.currentTarget.value)}
        rightSection={loading ? <Loader size="xs" /> : null}
      />

      <Text size="sm" mt="xs" c="dimmed">
        Current: "{searchTerm}" | Debounced: "{debounced}"
      </Text>

      <Stack mt="md">
        {results.map((result, i) => (
          <Text key={i}>{result}</Text>
        ))}
      </Stack>
    </Box>
  );
}

// Using debounced callback for more control
function DebouncedCallbackDemo() {
  const [value, setValue] = useState('');

  const handleSearch = useDebouncedCallback((query: string) => {
    console.log('Searching for:', query);
    // Perform API call here
  }, 500);

  return (
    <TextInput
      value={value}
      onChange={(e) => {
        setValue(e.currentTarget.value);
        handleSearch(e.currentTarget.value);
      }}
      placeholder="Search..."
    />
  );
}
```

## DatePicker Component

DatePicker provides date selection with calendar interface, supporting single dates, date ranges, and multiple dates. Integrates with DatesProvider for localization.

```tsx
import { useState } from 'react';
import { DatePicker, DatePickerInput, DatesProvider } from '@mantine/dates';
import { Stack, Text } from '@mantine/core';
import 'dayjs/locale/de';

function DatePickerDemo() {
  const [date, setDate] = useState<Date | null>(null);
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([null, null]);
  const [multipleDates, setMultipleDates] = useState<Date[]>([]);

  return (
    <Stack>
      {/* Basic date picker */}
      <DatePicker value={date} onChange={setDate} />

      {/* Date range picker */}
      <DatePicker
        type="range"
        value={dateRange}
        onChange={setDateRange}
        allowSingleDateInRange
      />

      {/* Multiple dates */}
      <DatePicker
        type="multiple"
        value={multipleDates}
        onChange={setMultipleDates}
        maxDate={new Date()}
      />

      {/* With constraints */}
      <DatePicker
        value={date}
        onChange={setDate}
        minDate={new Date()}
        maxDate={new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)} // 30 days
        excludeDate={(d) => d.getDay() === 0 || d.getDay() === 6} // No weekends
      />

      <Text>Selected: {date?.toLocaleDateString()}</Text>
    </Stack>
  );
}

// Date picker input with popover
function DatePickerInputDemo() {
  const [value, setValue] = useState<Date | null>(null);

  return (
    <DatesProvider settings={{ locale: 'de', firstDayOfWeek: 1 }}>
      <DatePickerInput
        label="Pick date"
        placeholder="Pick date"
        value={value}
        onChange={setValue}
        valueFormat="DD.MM.YYYY"
        clearable
      />
    </DatesProvider>
  );
}
```

## LineChart Component

LineChart renders line charts using Recharts with Mantine styling, supporting multiple series, tooltips, legends, and responsive sizing.

```tsx
import { LineChart, AreaChart, BarChart } from '@mantine/charts';

const data = [
  { date: 'Jan', Apples: 2890, Oranges: 2338, Tomatoes: 2452 },
  { date: 'Feb', Apples: 2756, Oranges: 2103, Tomatoes: 2402 },
  { date: 'Mar', Apples: 3322, Oranges: 2194, Tomatoes: 2287 },
  { date: 'Apr', Apples: 3470, Oranges: 2108, Tomatoes: 2452 },
  { date: 'May', Apples: 3129, Oranges: 2680, Tomatoes: 2323 },
  { date: 'Jun', Apples: 3475, Oranges: 2789, Tomatoes: 2650 },
];

function ChartsDemo() {
  return (
    <Stack>
      {/* Line chart with multiple series */}
      <LineChart
        h={300}
        data={data}
        dataKey="date"
        series={[
          { name: 'Apples', color: 'indigo.6' },
          { name: 'Oranges', color: 'blue.6' },
          { name: 'Tomatoes', color: 'teal.6' },
        ]}
        curveType="natural"
        withLegend
        legendProps={{ verticalAlign: 'bottom', height: 50 }}
        withDots={false}
      />

      {/* Area chart */}
      <AreaChart
        h={300}
        data={data}
        dataKey="date"
        series={[
          { name: 'Apples', color: 'indigo.6' },
          { name: 'Oranges', color: 'blue.6' },
        ]}
        fillOpacity={0.3}
        strokeWidth={2}
      />

      {/* Bar chart */}
      <BarChart
        h={300}
        data={data}
        dataKey="date"
        series={[
          { name: 'Apples', color: 'violet.6' },
          { name: 'Oranges', color: 'cyan.6' },
        ]}
        tickLine="y"
        gridAxis="xy"
      />
    </Stack>
  );
}
```

## Notifications System

The notifications system provides toast-style notifications with customizable positioning, auto-close, and update capabilities.

```tsx
import { notifications, Notifications } from '@mantine/notifications';
import { Button, Group, Stack } from '@mantine/core';
import { IconCheck, IconX } from '@tabler/icons-react';
import '@mantine/notifications/styles.css';

// Add Notifications component to your app root
function App() {
  return (
    <MantineProvider>
      <Notifications position="top-right" />
      <YourApp />
    </MantineProvider>
  );
}

function NotificationsDemo() {
  const showBasic = () => {
    notifications.show({
      title: 'Default notification',
      message: 'This is a basic notification message',
    });
  };

  const showSuccess = () => {
    notifications.show({
      title: 'Success!',
      message: 'Your changes have been saved',
      color: 'green',
      icon: <IconCheck size={18} />,
      autoClose: 4000,
    });
  };

  const showError = () => {
    notifications.show({
      title: 'Error',
      message: 'Something went wrong. Please try again.',
      color: 'red',
      icon: <IconX size={18} />,
      autoClose: false,
    });
  };

  const showLoading = () => {
    const id = notifications.show({
      loading: true,
      title: 'Uploading file',
      message: 'Please wait while we upload your file...',
      autoClose: false,
      withCloseButton: false,
    });

    // Update notification after async operation
    setTimeout(() => {
      notifications.update({
        id,
        title: 'Upload complete',
        message: 'Your file has been uploaded successfully',
        color: 'green',
        icon: <IconCheck size={18} />,
        loading: false,
        autoClose: 3000,
      });
    }, 3000);
  };

  return (
    <Group>
      <Button onClick={showBasic}>Basic</Button>
      <Button color="green" onClick={showSuccess}>Success</Button>
      <Button color="red" onClick={showError}>Error</Button>
      <Button onClick={showLoading}>With Loading</Button>
      <Button variant="outline" onClick={() => notifications.clean()}>
        Clear All
      </Button>
    </Group>
  );
}
```

## Spotlight (Command Palette)

Spotlight provides a command palette interface (Ctrl+K) for quick navigation and actions with search functionality.

```tsx
import { Spotlight, SpotlightActionData, spotlight } from '@mantine/spotlight';
import { Button } from '@mantine/core';
import { IconHome, IconDashboard, IconSearch, IconSettings, IconUser } from '@tabler/icons-react';
import '@mantine/spotlight/styles.css';

const actions: SpotlightActionData[] = [
  {
    id: 'home',
    label: 'Home',
    description: 'Navigate to home page',
    onClick: () => window.location.href = '/',
    leftSection: <IconHome size={24} stroke={1.5} />,
  },
  {
    id: 'dashboard',
    label: 'Dashboard',
    description: 'View analytics and reports',
    onClick: () => window.location.href = '/dashboard',
    leftSection: <IconDashboard size={24} stroke={1.5} />,
  },
  {
    id: 'settings',
    label: 'Settings',
    description: 'Manage your preferences',
    onClick: () => window.location.href = '/settings',
    leftSection: <IconSettings size={24} stroke={1.5} />,
    keywords: ['preferences', 'config'],
  },
  {
    id: 'profile',
    label: 'Profile',
    description: 'View and edit your profile',
    onClick: () => window.location.href = '/profile',
    leftSection: <IconUser size={24} stroke={1.5} />,
  },
];

function SpotlightDemo() {
  return (
    <>
      <Button onClick={spotlight.open}>
        Open Spotlight (Ctrl + K)
      </Button>

      <Spotlight
        actions={actions}
        nothingFound="Nothing found..."
        highlightQuery
        shortcut={['mod + K', '/']}
        searchProps={{
          leftSection: <IconSearch size={20} stroke={1.5} />,
          placeholder: 'Search...',
        }}
      />
    </>
  );
}
```

## Dropzone Component

Dropzone handles file uploads with drag-and-drop support, file validation, and visual feedback states.

```tsx
import { Dropzone, DropzoneProps, IMAGE_MIME_TYPE, PDF_MIME_TYPE } from '@mantine/dropzone';
import { Group, Text, Stack, Image, SimpleGrid } from '@mantine/core';
import { IconUpload, IconPhoto, IconX, IconFile } from '@tabler/icons-react';
import '@mantine/dropzone/styles.css';

function DropzoneDemo() {
  const [files, setFiles] = useState<File[]>([]);

  const previews = files.map((file, index) => {
    const imageUrl = URL.createObjectURL(file);
    return (
      <Image
        key={index}
        src={imageUrl}
        onLoad={() => URL.revokeObjectURL(imageUrl)}
        w={100}
        h={100}
        fit="cover"
      />
    );
  });

  return (
    <Stack>
      <Dropzone
        onDrop={(acceptedFiles) => {
          console.log('Accepted files:', acceptedFiles);
          setFiles(acceptedFiles);
        }}
        onReject={(rejectedFiles) => {
          console.log('Rejected files:', rejectedFiles);
        }}
        maxSize={5 * 1024 ** 2} // 5MB
        accept={IMAGE_MIME_TYPE}
        multiple
      >
        <Group justify="center" gap="xl" mih={220} style={{ pointerEvents: 'none' }}>
          <Dropzone.Accept>
            <IconUpload size={52} color="var(--mantine-color-blue-6)" stroke={1.5} />
          </Dropzone.Accept>
          <Dropzone.Reject>
            <IconX size={52} color="var(--mantine-color-red-6)" stroke={1.5} />
          </Dropzone.Reject>
          <Dropzone.Idle>
            <IconPhoto size={52} color="var(--mantine-color-dimmed)" stroke={1.5} />
          </Dropzone.Idle>

          <div>
            <Text size="xl" inline>
              Drag images here or click to select files
            </Text>
            <Text size="sm" c="dimmed" inline mt={7}>
              Attach as many files as you like, each file should not exceed 5MB
            </Text>
          </div>
        </Group>
      </Dropzone>

      {previews.length > 0 && (
        <SimpleGrid cols={4} mt="md">
          {previews}
        </SimpleGrid>
      )}
    </Stack>
  );
}

// Full screen dropzone
function FullScreenDropzoneDemo() {
  const openRef = useRef<() => void>(null);

  return (
    <>
      <Dropzone.FullScreen
        active
        accept={PDF_MIME_TYPE}
        onDrop={(files) => console.log(files)}
      >
        <Group justify="center" gap="xl" mih="100vh">
          <IconFile size={80} stroke={1.5} />
          <Text size="xl">Drop PDF files anywhere on screen</Text>
        </Group>
      </Dropzone.FullScreen>
    </>
  );
}
```

## AppShell Layout

AppShell provides a layout structure with navbar, header, aside, and footer sections that respond to responsive breakpoints and collapse states.

```tsx
import { AppShell, Burger, Group, NavLink, Text, ScrollArea } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconHome, IconSettings, IconUser, IconLogout } from '@tabler/icons-react';

function AppShellDemo() {
  const [opened, { toggle }] = useDisclosure();
  const [active, setActive] = useState(0);

  const navItems = [
    { icon: IconHome, label: 'Home', href: '/' },
    { icon: IconUser, label: 'Profile', href: '/profile' },
    { icon: IconSettings, label: 'Settings', href: '/settings' },
  ];

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Text fw={700} size="lg">My Application</Text>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <AppShell.Section grow component={ScrollArea}>
          {navItems.map((item, index) => (
            <NavLink
              key={item.label}
              active={index === active}
              label={item.label}
              leftSection={<item.icon size={16} stroke={1.5} />}
              onClick={() => setActive(index)}
            />
          ))}
        </AppShell.Section>

        <AppShell.Section>
          <NavLink
            label="Logout"
            leftSection={<IconLogout size={16} stroke={1.5} />}
            c="red"
          />
        </AppShell.Section>
      </AppShell.Navbar>

      <AppShell.Main>
        <Text>Main application content goes here</Text>
      </AppShell.Main>
    </AppShell>
  );
}
```

## Color Scheme Management

Mantine provides built-in dark mode support with useMantineColorScheme hook and ColorSchemeScript for SSR applications.

```tsx
import {
  MantineProvider,
  useMantineColorScheme,
  useComputedColorScheme,
  ActionIcon,
  Group
} from '@mantine/core';
import { IconSun, IconMoon, IconDeviceDesktop } from '@tabler/icons-react';

// In your _document.tsx or HTML head for SSR
import { ColorSchemeScript } from '@mantine/core';

export function Document() {
  return (
    <html>
      <head>
        <ColorSchemeScript defaultColorScheme="auto" />
      </head>
      <body>
        <App />
      </body>
    </html>
  );
}

function ColorSchemeToggle() {
  const { setColorScheme, colorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light');

  return (
    <Group>
      <ActionIcon
        onClick={() => setColorScheme('light')}
        variant={colorScheme === 'light' ? 'filled' : 'default'}
        aria-label="Light mode"
      >
        <IconSun size={18} />
      </ActionIcon>

      <ActionIcon
        onClick={() => setColorScheme('dark')}
        variant={colorScheme === 'dark' ? 'filled' : 'default'}
        aria-label="Dark mode"
      >
        <IconMoon size={18} />
      </ActionIcon>

      <ActionIcon
        onClick={() => setColorScheme('auto')}
        variant={colorScheme === 'auto' ? 'filled' : 'default'}
        aria-label="System preference"
      >
        <IconDeviceDesktop size={18} />
      </ActionIcon>

      <Text>Current: {computedColorScheme}</Text>
    </Group>
  );
}

function App() {
  return (
    <MantineProvider defaultColorScheme="auto">
      <ColorSchemeToggle />
    </MantineProvider>
  );
}
```

## Responsive Styles with useMatches

useMatches provides responsive values based on breakpoints for complex responsive scenarios beyond CSS media queries.

```tsx
import { useMatches } from '@mantine/core';
import { Button, Stack, Text, SimpleGrid, Card } from '@mantine/core';

function ResponsiveDemo() {
  // Returns different values based on current breakpoint
  const buttonSize = useMatches({
    base: 'xs',      // default (mobile)
    sm: 'sm',        // >= 576px
    md: 'md',        // >= 768px
    lg: 'lg',        // >= 992px
  });

  const columns = useMatches({
    base: 1,
    sm: 2,
    md: 3,
    lg: 4,
  });

  const padding = useMatches({
    base: 'xs',
    md: 'md',
    lg: 'xl',
  });

  return (
    <Stack p={padding}>
      <Button size={buttonSize}>Responsive Button</Button>

      <SimpleGrid cols={columns}>
        {[1, 2, 3, 4].map((i) => (
          <Card key={i} shadow="sm" p={padding}>
            <Text>Card {i}</Text>
          </Card>
        ))}
      </SimpleGrid>
    </Stack>
  );
}

// Style props also accept responsive objects
function ResponsiveStyleProps() {
  return (
    <Stack
      gap={{ base: 'xs', sm: 'md', lg: 'xl' }}
      p={{ base: 'xs', md: 'md' }}
    >
      <Text
        fz={{ base: 'sm', md: 'md', lg: 'lg' }}
        fw={{ base: 400, md: 500 }}
      >
        Responsive text
      </Text>

      <Button
        size={{ base: 'xs', sm: 'sm', md: 'md' }}
        fullWidth={{ base: true, sm: false }}
      >
        Responsive Button
      </Button>
    </Stack>
  );
}
```

Mantine is ideal for building modern React applications that require a comprehensive, well-designed component library with minimal configuration. Common use cases include admin dashboards, SaaS applications, e-commerce platforms, internal tools, and any project requiring a consistent design system with dark mode support. The library excels in scenarios where rapid development is prioritized while maintaining high-quality UX, as components come pre-styled with sensible defaults while remaining fully customizable.

Integration with Mantine follows a straightforward pattern: install the required packages (`@mantine/core`, `@mantine/hooks`, and any extension packages), wrap your app with MantineProvider, import component styles, and begin using components. For forms, combine `@mantine/form` with input components for complete form management. For data visualization, `@mantine/charts` provides recharts wrappers styled consistently with the design system. The modular architecture means you only include what you need, keeping bundle sizes optimized while having access to the full ecosystem when required.
