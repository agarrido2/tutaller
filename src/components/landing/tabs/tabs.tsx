import { Slot, component$, useSignal } from '@builder.io/qwik';

interface Tab {
  id: string;
  label: string;
}

interface TabsProps {
  tabs: Tab[];
  defaultTab?: string;
}

export const Tabs = component$<TabsProps>(({ tabs, defaultTab }) => {
  const activeTab = useSignal(defaultTab || tabs[0].id);

  return (
    <div>
      {/* Tab Navigation */}
      <div class="border-b border-border">
        <nav class="-mb-px flex space-x-8" aria-label="Tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick$={() => activeTab.value = tab.id}
              class={`
                whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm
                ${activeTab.value === tab.id
                  ? 'border-accent text-accent'
                  : 'border-transparent text-body hover:text-heading hover:border-border'
                }
              `}
              aria-current={activeTab.value === tab.id ? 'page' : undefined}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Panels */}
      <div class="mt-8">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            class={`${activeTab.value === tab.id ? 'block' : 'hidden'}`}
            role="tabpanel"
            aria-labelledby={`tab-${tab.id}`}
          >
            <Slot name={tab.id} />
          </div>
        ))}
      </div>
    </div>
  );
});
